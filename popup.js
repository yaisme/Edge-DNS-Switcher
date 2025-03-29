const button = document.getElementById('toggleDns');
const statusDiv = document.getElementById('status');

async function getCurrentMode() {
  const config = await chrome.dns.getDoHResolverConfig();
  return config.mode === 'secure' ? 'doh' : 'default';
}

function updateButton(mode) {
  if (mode === 'default') {
    button.textContent = 'Switch to DNS over HTTPS';
    statusDiv.textContent = 'Current Mode: Default DNS';
  } else {
    button.textContent = 'Switch to Default DNS';
    statusDiv.textContent = 'Current Mode: DNS over HTTPS';
  }
}

async function toggleDns() {
  const currentMode = await getCurrentMode();
  const newMode = currentMode === 'default' ? 'doh' : 'default';

  if (newMode === 'doh') {
    await chrome.dns.setDoHResolverConfig({
      mode: 'secure',
      templates: ['https://cloudflare-dns.com/dns-query']
    });
  } else {
    await chrome.dns.setDoHResolverConfig({
      mode: 'off'
    });
  }

  chrome.storage.local.set({ dnsMode: newMode });
  updateButton(newMode);
}

getCurrentMode().then(updateButton);
button.addEventListener('click', toggleDns);