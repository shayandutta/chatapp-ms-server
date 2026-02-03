import { createApp } from "./app";
import { createServer } from "http";
import { logger } from "./utils/logger";

const main = async () => {
    try {
        const app = createApp();
        const server = createServer(app);

        const port =3000;
        server.listen(port, () => {
            logger.info(`Server is running on port ${port}`);
        });
    }catch(error){
        logger.error(error);
        process.exit(1);
    }
}

main();