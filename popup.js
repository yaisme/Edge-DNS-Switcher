// popup.js
const button = document.getElementById('toggleDns');
const statusDiv = document.getElementById('status');

// DNS Mode Configuration (Default vs. DoH)
const dnsConfig = {
  modeDefault: {
    mode: "default"
  },
  modeDoH: {
    mode: "secure",
    secureDnsMode: "secure",
    secureDnsServers: ["https://dns.google/dns-query"] // Using Google DoH
  }
};

// Load current DNS setting from storage
chrome.storage.local.get(['dnsMode'], function(result) {
  const dnsMode = result.dnsMode || 'default';
  updateButton(dnsMode);
});

// Update button based on current mode
function updateButton(mode) {
  if (mode === 'default') {
    button.textContent = 'Switch to DNS over HTTPS';
    statusDiv.textContent = 'Current Mode: Default DNS';
  } else {
    button.textContent = 'Switch to Default DNS';
    statusDiv.textContent = 'Current Mode: DNS over HTTPS';
  }
}

// Click event to toggle DNS setting
button.addEventListener('click', () => {
  chrome.storage.local.get(['dnsMode'], (result) => {
    const currentMode = result.dnsMode || 'default';
    const newMode = currentMode === 'default' ? 'doh' : 'default';
    
    // Set DNS setting
    chrome.privacy.network.webRTCIPHandlingPolicy.set({ value: 'default_public_interface_only' }); // Enhanced privacy
    chrome.privacy.network.dnsOverHttpsMode.set({
      value: newMode === 'doh' ? 'secure' : 'off'
    }, () => {
      if (newMode === 'doh') {
        chrome.privacy.network.dnsOverHttpsTemplates.set({
          value: dnsConfig.modeDoH.secureDnsServers.join(' ')
        });
      } else {
        chrome.privacy.network.dnsOverHttpsTemplates.clear({});
      }
      
      chrome.storage.local.set({ dnsMode: newMode });
      updateButton(newMode);
    });
  });
});
