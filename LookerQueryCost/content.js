// Function to calculate the cost
function calculateCost(sizeStr) {
    const pricePerTB = 6.25; // Price per TB using BigQuery > https://cloud.google.com/bigquery/pricing
    let bytes;

    if (sizeStr.endsWith('KB')) {
        bytes = parseFloat(sizeStr.replace(' KB', '')) * 1024;
    } else if (sizeStr.endsWith('MB')) {
        bytes = parseFloat(sizeStr.replace(' MB', '')) * 1024 * 1024;
    } else if (sizeStr.endsWith('GB')) {
        bytes = parseFloat(sizeStr.replace(' GB', '')) * 1024 * 1024 * 1024;
    } else if (sizeStr.endsWith('TB')) {
        bytes = parseFloat(sizeStr.replace(' TB', '')) * 1024 * 1024 * 1024 * 1024;
    } else {
        return 'Unknown size';
    }

    const cost = (bytes / (1024 * 1024 * 1024 * 1024)) * pricePerTB;

    return `Cost: $${cost.toFixed(10)}`;
}

// Poll the DOM to find the element
function checkForElement() {
    const el = document.querySelector('.cost-message');

    if (el) {
        const costMessage = el.textContent;
        const sizeStr = costMessage.replace('Will process ', '').replace(/Cost: \$[\d.]+/, '').trim(); // Remove previous cost if exists
        const cost = calculateCost(sizeStr);

        // Update the content to add cost
        el.textContent = `Will process ${sizeStr}  ${cost}`;
    }
}


// Poll the DOM every second to update the cost
setInterval(checkForElement, 5000);
