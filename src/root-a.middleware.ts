import { Logger, NestMiddleware } from '@nestjs/common';

export class RootAMiddleware implements NestMiddleware {
  private readonly logger = new Logger('Root A');

  use(req: any, res: any, next: (error?: any) => void) {
    this.logger.log(`triggered on ${req.originalUrl}`);
    next();
  }
}
