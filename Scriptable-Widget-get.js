// Fetch data from the backend service

    async function fetchData() {
  try {
    const apiUrl = 'your backend service url';
    const response = new Request(apiUrl);  
    const data = await response.loadJSON();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Create a widget with data from the backend service
async function createWidget() {
  
  const data = await fetchData();
  console.log(data);
  const widget = new ListWidget();
  widget.backgroundColor = new Color("#000000");
  let background = widget.addText('');
  background.font = Font.lightSystemFont(25);
  background.textColor = new Color("#ffffff");
  background.textOpacity = 0.8;
  background.text = 'TASK OF THE DAY';
  background.topAlignContent;
  background.centerAlignText();
  const headingText = 'Given by your team lead:';
  const heading = widget.addText(headingText);
  heading.font = Font.boldSystemFont(16);
  const cnt = 1;

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    widget.addText(`${i+1}. ${item}`);
  }
  
  return widget;
}

// Display the widget
const widget = await createWidget();
widget.refreshAfterDate = new Date(Date.now() + 1 * 60 * 1000); // Refresh every 1 minute

if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  widget.presentLarge();
}

Script.complete();
