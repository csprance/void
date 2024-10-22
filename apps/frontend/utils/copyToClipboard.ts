// It will be available as 'copyToClipboard()'
// https://github.com/vueuse/vueuse/blob/84965f53edc73b221804de91e565ffdf71d1e28d/packages/core/useClipboard/index.ts#L100
export default async function (value: string) {
  if (!value) return false;

  // First try using the Clipboard API
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(value);
      // console.log("Text copied to clipboard using Clipboard API");
      return true;
    } catch (err) {
      console.error("Clipboard API failed: ", err);
      // If Clipboard API fails, it will continue to the fallback method
    }
  }

  // Fallback method using textarea
  try {
    const ta = document.createElement("textarea");
    ta.value = value;
    ta.style.position = "absolute";
    ta.style.opacity = "0";
    ta.style.pointerEvents = "none"; // Ensuring it's not clickable
    document.body.appendChild(ta);
    ta.select();
    const successful = document.execCommand("copy");
    ta.remove();

    if (successful) {
      // console.log("Text copied to clipboard using legacy method");
      return true;
    } else {
      throw new Error("ExecCommand failed");
    }
  } catch (err) {
    console.error("Fallback method failed: ", err);
    return false;
  }
}
