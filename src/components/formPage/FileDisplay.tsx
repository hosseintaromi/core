const FileDisplay = ({ fileUrl }: { fileUrl: string }) => {
  const fileExtension = fileUrl.split(".").pop()?.toLowerCase();

  if (fileExtension === "mp4" || fileExtension === "webm") {
    return (
      <video controls width="100%">
        <source src={fileUrl} type={`video/${fileExtension}`} />
        Sorry, your browser doesn't support embedded videos.
      </video>
    );
  }

  if (
    fileExtension === "jpg" ||
    fileExtension === "jpeg" ||
    fileExtension === "png"
  ) {
    return <img src={fileUrl} alt="File" width="100%" />;
  }

  // Handle other file types (e.g., documents, zip files) as needed
  return (
    <a href={fileUrl}>
      <img width="40" src="/assets/images/file.svg" alt="file" />
    </a>
  );
};

export default FileDisplay;
