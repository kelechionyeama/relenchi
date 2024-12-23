(function rewrite_all_links() {
  if (window.location.hostname !== '127.0.0.1') {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
      const originalHref = link.getAttribute('href');
      if (!originalHref.startsWith('mailto:')) {
        link.setAttribute('href', `/relenchi/${originalHref}`);
      }
    });
  }
})()