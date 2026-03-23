const referrerUrl = document.referrer ? new URL(document.referrer) : null;
const cameFromCampaignsPage =
  referrerUrl &&
  referrerUrl.origin === window.location.origin &&
  referrerUrl.pathname.endsWith("/campaigns.html");

document.querySelectorAll(".back-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    if (!cameFromCampaignsPage || window.history.length <= 1) {
      return;
    }

    event.preventDefault();
    window.history.back();
  });
});
