# GitHub MP3 Player

This is a simple browser-based audio player you can host on GitHub Pages.

## Files
- `index.html`
- `style.css`
- `script.js`
- `audio/track1.mp3`
- `audio/track2.mp3`
- `audio/track3.mp3`

## What to do
1. Upload this folder to a GitHub repository.
2. Add your MP3 files into the `audio` folder.
3. Edit `script.js` and change the titles, artist text, file names, and cover image URLs.
4. In GitHub, go to **Settings > Pages**.
5. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** main
   - **Folder:** / (root)
6. Save, then open your GitHub Pages link.

## Example GitHub Pages URL
`https://yourusername.github.io/your-repo-name/`

## Notes
- If you rename the MP3 files, update the matching `file:` values in `script.js`.
- You can duplicate track objects in `script.js` to add more songs.
