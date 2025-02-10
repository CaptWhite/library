import fs from 'fs';
import fetch from 'node-fetch';

const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 30000); // 30 segundos
clearTimeout(timeout);


export async function fetchAndSavePDF(urlDrive) {
    const outputPath = './public/fichero.pdf'

    try {
        const response = await fetch(urlDrive, { signal: controller.signal });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        fs.writeFileSync(outputPath, buffer);

        console.log(`PDF successfully saved to ${outputPath}`);
    } catch (error) {
        console.error("Error fetching or saving the PDF:", error);
    }
}