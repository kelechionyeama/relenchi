(function rewrite_all_links() {
  console.log(window.location.hostname)
  if (window.location.hostname !== '127.0.0.1') {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
      const originalHref = link.getAttribute('href');
      link.setAttribute('href', `/relenchi/${originalHref}`);
    });
  }
})()