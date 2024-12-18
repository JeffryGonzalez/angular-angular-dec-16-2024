import news from './news-handler';
import { features } from './features-handler';
import { lrcHandlers } from './lrc-handler';
export const handlers = [...news, ...features, ...lrcHandlers];
