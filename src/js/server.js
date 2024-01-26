console.log('Service account path:', process.env.GOOGLE_APPLICATION_CREDENTIALS);

const express = require('express');
const multer = require('multer'); // Import multer
const { Storage } = require('@google-cloud/storage');
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

// Initialize Google Cloud Storage and Secret Manager
const storage = new Storage();
const bucket = storage.bucket('lulu-contact-bucket');
const secretClient = new SecretManagerServiceClient();

// Configure multer to use memory storage
const upload = multer({
  storage: multer.memoryStorage(),
});

const app = express();
app.use(express.static('public')); // Serve your static files

// Upload route
app.post('/upload', upload.single('image'), (req, res, next) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // Create a new blob in the bucket and upload the file data.
  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream();

  blobStream.on('error', err => next(err));

  blobStream.on('finish', () => {
    // The file is uploaded to Google Cloud Storage
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
    res.status(200).send(`Success, image uploaded to: ${publicUrl}`);
  });

  blobStream.end(req.file.buffer);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Error handling for the upload route
app.use((error, req, res, next) => {
  if (error) {
    res.status(500).send(error.message);
  }
});

// Function to retrieve secret
async function getSecret(secretName) {
  const [version] = await secretClient.accessSecretVersion({ name: secretName });
  const payload = version.payload.data.toString('utf8');
  return payload;
}

// Use this function to get your secret value
const secretName = 'projects/core-appliance-412305/secrets/json-key/versions/latest';
getSecret(secretName)
  .then(secretValue => {
    // Use the secret value in your application
  })
  .catch(err => {
    console.error('Error accessing secret:', err);
  });
