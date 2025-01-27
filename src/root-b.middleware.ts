import { Logger, NestMiddleware } from '@nestjs/common';

export class RootBMiddlewareB implements NestMiddleware {
  private readonly logger = new Logger('Root B');

  use(req: any, res: any, next: (error?: any) => void) {
    this.logger.log(`triggered on ${req.originalUrl}`);
    next();
  }
}
