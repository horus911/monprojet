// Middleware pour Netlify Functions
exports.handler = async (event) => {
  const isFacebookBot = /facebookexternalhit|Facebot/i.test(event.headers['user-agent']);
  
  if(isFacebookBot) {
    return {
      statusCode: 200,
      body: `
        <!DOCTYPE html>
        <html prefix="og: https://ogp.me/ns#">
        <head>
          <title>Votre Titre</title>
          <meta property="og:url" content="${event.rawUrl}">
          <meta property="og:type" content="website">
          <meta property="og:title" content="Titre Partage Facebook">
          <meta property="og:image" content="https://example.com/image.jpg">
        </head>
        <body>
          <h1>Contenu visible par Facebook</h1>
        </body>
        </html>
      `
    };
  } else {
    return {
      statusCode: 302,
      headers: { Location: 'https://url-destination.com' }
    };
  }
};
// Ajoutez ce paramètre à vos URLs partagées
const shareUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(yourUrl)}&t=${Date.now()}`;
<!-- Ajoutez ceci dans votre page de redirection -->
<meta property="og:url" content="https://votre-domaine.com/lien-court">
<meta name="robots" content="noindex">
