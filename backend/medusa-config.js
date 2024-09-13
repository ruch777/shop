import { defineConfig, loadEnv, Modules } from "@medusajs/utils";

const isDev = process.env.NODE_ENV === "development";

loadEnv(process.env.NODE_ENV, process.cwd());

const backendUrl =
  process.env.RAILWAY_PUBLIC_DOMAIN_VALUE || "http://localhost:9000";

const plugins = [
  {
    resolve: `medusa-file-cloudinary`,
    options: {
      cloud_name: "romain",
      api_key: "475681926452489",
      api_secret: "x7C7Wt2p5ZJzLH2LRCgjtNWNA0g",
      secure: true,
    },
  },
  {
    resolve: `medusa-payment-stripe`,
    options: {
      api_key: process.env.STRIPE_API_KEY,
      webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
    },
    resolve: `medusa-file-s3`,
    options: {
      s3_url: process.env.S3_URL,
      bucket: process.env.S3_BUCKET,
      region: process.env.S3_REGION,
      access_key_id: process.env.S3_ACCESS_KEY_ID,
      secret_access_key: process.env.S3_SECRET_ACCESS_KEY,
      cache_control: process.env.S3_CACHE_CONTROL,
      // optional
      download_file_duration: process.env.S3_DOWNLOAD_FILE_DURATION,
      prefix: process.env.S3_PREFIX,
    },
  },
];

const modules = {
  [Modules.FILE]: {
    resolve: "@medusajs/file",
    options: {
      providers: [
        {
          resolve: "@medusajs/file-local-next",
          id: "local",
          options: {
            backend_url: `${backendUrl}/static`,
          },
        },
      ],
    },
  },
  [Modules.EVENT_BUS]: {
    resolve: "@medusajs/event-bus-redis",
    options: {
      redisUrl: process.env.REDIS_URL,
    },
  },
};

// Stripe payment provider
const stripeApiKey = process.env.STRIPE_API_KEY;
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const stripeConfigured = stripeApiKey && stripeWebhookSecret;
if (stripeConfigured) {
  console.log(
    "Stripe api key and webhook secret found, enabling stripe payment provider"
  );
  modules[Modules.PAYMENT] = {
    resolve: "@medusajs/payment",
    options: {
      providers: [
        {
          resolve: "@medusajs/payment-stripe",
          id: "stripe",
          options: {
            apiKey: stripeApiKey,
            webhookSecret: stripeWebhookSecret,
          },
        },
      ],
    },
  };
}

// SendGrid notification provider
const sendgridApiKey = process.env.SENDGRID_API_KEY;
const sendgridFrom = process.env.SENDGRID_FROM_EMAIL;
const sendgridConfigured = sendgridApiKey && sendgridFrom;
if (sendgridConfigured) {
  console.log(
    "SendGrid api key and from address found, enabling SendGrid notification provider"
  );
  modules[Modules.NOTIFICATION] = {
    resolve: "@medusajs/notification",
    options: {
      providers: [
        {
          resolve: "@medusajs/notification-sendgrid",
          id: "sendgrid",
          options: {
            channels: ["email"],
            api_key: sendgridApiKey,
            from: sendgridFrom,
          },
        },
      ],
    },
  };
}

/** @type {import('@medusajs/medusa').ConfigModule["projectConfig"]} */
const projectConfig = {
  http: {
    adminCors: process.env.ADMIN_CORS,
    authCors: process.env.AUTH_CORS,
    storeCors: process.env.STORE_CORS,
    jwtSecret: process.env.JWT_SECRET,
    cookieSecret: process.env.COOKIE_SECRET,
  },
  redisUrl: process.env.REDIS_URL,
  database_url: process.env.DATABASE_URL,
  database_type: "postgres",
};

const completeConfig = {
  projectConfig,
  plugins,
  modules,
  admin: {
    ...(!isDev && { backendUrl }),
  },
};

export default defineConfig(completeConfig);
export { backendUrl };
