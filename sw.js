// FUTSAL STRIKE：ホーム画面に追加できるようにするための、いちばん小さい service worker。
// ファイルを覚えておく（キャッシュ）ことはしない。いつもネットから最新を読む。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
