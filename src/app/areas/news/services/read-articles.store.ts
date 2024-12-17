import { patchState, signalStore, withMethods } from '@ngrx/signals';
import { addEntity, withEntities } from '@ngrx/signals/entities';
import { NewsArticle } from '../types';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
export const ReadArticleStore = signalStore(
  withDevtools('read-articles'),
  withEntities<NewsArticle>(),
  withMethods((store) => {
    // this space will be used later.
    return {
      addArticle: (article: NewsArticle) =>
        patchState(store, addEntity(article)),
    };
  }),
);
