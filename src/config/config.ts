export const config = {
  dev: {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASS,
    database: "udagramdanieldemo",
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    aws_region: "eu-west-1",
    aws_profile: "default",
    aws_media_bucket: process.env.AWS_MEDIA_BUCKET,
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
