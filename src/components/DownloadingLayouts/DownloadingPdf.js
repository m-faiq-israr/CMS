import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const handleDownloadPdf = (screenRef) => {
  const input = screenRef.current;

  // Increase the scale for better capture quality
  html2canvas(input, { scale: 3, useCORS: true }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");

    // Get the actual width and height of the element on the screen
    const actualWidth = input.offsetWidth;
    const actualHeight = input.offsetHeight;

    // Create a PDF with increased size to avoid overlap
    const pdf = new jsPDF({
      orientation: actualWidth > actualHeight ? "landscape" : "portrait",
      unit: "px",
      format: [actualWidth + 20, actualHeight + 20], // Adjust the size with extra padding
    });

    // Add the image to the PDF with slight margin adjustments
    pdf.addImage(imgData, "PNG", 10, 10, actualWidth, actualHeight); // Adjust the X and Y positions if necessary

    // Save the PDF
    pdf.save("download.pdf");
  });
};
