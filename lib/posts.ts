import fs from 'fs/promises'; // Module pour manipuler le système de fichiers de manière asynchrone avec des Promises
import path from 'path'; // Module pour manipuler les chemins de fichiers et de dossiers
import matter from 'gray-matter'; // Module pour parser les fichiers Markdown avec des métadonnées en YAML (frontmatter)
import { remark } from 'remark'; 
import html from 'remark-html';  

// Chemin du dossier où se trouvent les articles Markdown
const postsDirectory = path.join(process.cwd(), 'content');

// Interface TypeScript pour définir la structure des données d'un article
export interface PostData {
  id: string; // Identifiant de l'article (nom du fichier sans extension)
  title: string; // Titre de l'article (provenant des métadonnées)
  date: string; // Date de publication de l'article (provenant des métadonnées)
  description?: string; // Optionnel si tu veux ajouter une description
  infos?: string[]; 
  content: string; // Contenu de l'article en HTML
}

// Fonction pour récupérer et trier tous les articles par date décroissante
export async function getSortedPostsData(): Promise<PostData[]> {
  // Lecture des noms de fichiers dans le répertoire des articles
  const fileNames = await fs.readdir(postsDirectory);

  // Lecture et traitement de chaque fichier pour extraire les données nécessaires
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, ''); // Supprime l'extension .md pour obtenir l'identifiant de l'article
      const fullPath = path.join(postsDirectory, fileName); // Chemin complet du fichier
      const fileContents = await fs.readFile(fullPath, 'utf8'); // Lecture du contenu du fichier

      // Analyse du contenu du fichier pour extraire le frontmatter (métadonnées) et le contenu Markdown
      const matterResult = matter(fileContents);

      // Retourne un objet avec les données de l'article
      return {
        id,
        ...(matterResult.data as { title: string; date: string }), // Injection des métadonnées (titre, date)
        content: matterResult.content, // Contenu brut du fichier Markdown
      };
    })
  );

  // Tri des articles par date décroissante (du plus récent au plus ancien)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Fonction pour récupérer les données d'un article spécifique à partir de son id
export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`); // Chemin complet du fichier
  const fileContents = await fs.readFile(fullPath, 'utf8'); // Lecture du contenu du fichier
  const matterResult = matter(fileContents); // Extraction des métadonnées et du contenu Markdown

  // Transformation du contenu Markdown en HTML
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString(); // Conversion du contenu en HTML sous forme de chaîne de caractères

  // Retourne un objet avec les données complètes de l'article, y compris le contenu en HTML
  return {
    id,
    content: contentHtml, // Contenu de l'article en HTML
    ...(matterResult.data as { title: string; date: string }), // Injection des métadonnées (titre, date)
  };
}
