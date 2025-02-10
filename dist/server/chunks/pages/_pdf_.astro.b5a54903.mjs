/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro.5936df6a.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.69a4bb31.mjs';
import { b as books } from './_book_.astro.90ea6219.mjs';
import { google } from 'googleapis';
import fs from 'fs/promises';
import 'path-to-regexp';
import 'cookie';
import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'node:fs';
import 'node:http';
import 'node:tls';
import 'mime';
import 'string-width';

async function fetchAndSavePDF(urlDrive) {

  let outputFilePath;
  {
      outputFilePath = './dist/client/fichero.pdf';
  }

    const auth = new google.auth.GoogleAuth({
        keyFile: './credenciales.json', // Ruta al archivo JSON descargado desde Google Cloud Console
        //credentials: credentials,
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        });

        // Inicializa la API de Google Drive
    const drive = google.drive({ version: 'v3', auth });
        
   try {
     // Obtener el archivo completo
     const res = await drive.files.get(
       {
         fileId: urlDrive,
         alt: 'media',
       },
       { responseType: 'arraybuffer' } // Usamos arraybuffer para recibir los datos en formato binario
     );
 
     // Convertir los datos en un Buffer
     const buffer = Buffer.from(res.data);
 
     // Escribir el contenido del archivo en el sistema de archivos
     fs.writeFile(outputFilePath, buffer);
     console.log(`Archivo descargado exitosamente en: ${outputFilePath}`);
   } catch (error) {
     console.error('Error al descargar el archivo:', error.message);
   }
}

const $$Astro = createAstro();
const $$pdf = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$pdf;
  const { pdf } = Astro2.params;
  const info = books.find((b) => b.id === pdf);
  await fetchAndSavePDF(info.urlDrive);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Libro ` }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main class="m-auto max-w-5xl">
    <p>${`Libro ${info.title}`}</p>
    <a href="/" class="text-2xl text-center py-8 hover:underline opacity-70 px-36">← Volver atrás</a>
    ${renderTemplate`<iframe${addAttribute(`/${encodeURIComponent("fichero.pdf")}`, "src")}${addAttribute({ width: "100%", height: "100vh" }, "style")} frameborder="0"></iframe>`}
  
  </main>
` })}`;
}, "C:/Users/captw/workspaces/Astro/Biblioteca. View Transitions API - Drive/biblioteca/src/pages/pdfViewer/[pdf].astro", void 0);

const $$file = "C:/Users/captw/workspaces/Astro/Biblioteca. View Transitions API - Drive/biblioteca/src/pages/pdfViewer/[pdf].astro";
const $$url = "/pdfViewer/[pdf]";

export { $$pdf as default, $$file as file, $$url as url };
