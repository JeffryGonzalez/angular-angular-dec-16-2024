import {
  patchState,
  signalStore,
  type,
  withComputed,
  withHooks,
  withMethods,
} from '@ngrx/signals';
import { addEntities, withEntities } from '@ngrx/signals/entities';
import { PostApiResponseItem } from '../types';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { computed, inject } from '@angular/core';
import { PostApi } from './post-api';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
export const PostsStore = signalStore(
  withDevtools('posts'),
  withEntities({ collection: '_server', entity: type<PostApiResponseItem>() }),
  withEntities({ collection: '_outbox', entity: type<PostApiResponseItem>() }),
  withMethods((store) => {
    const api = inject(PostApi);
    return {
      _load: rxMethod<void>(
        pipe(
          switchMap(() =>
            api
              .getPosts()
              .pipe(
                tap((posts) =>
                  patchState(
                    store,
                    addEntities(posts, { collection: '_server' }),
                  ),
                ),
              ),
          ),
        ),
      ),
    };
  }),
  withComputed((store) => {
    return {
      posts: computed(() => store._serverEntities()),
    };
  }),
  withHooks({
    onInit(store) {
      store._load();
    },
  }),
);
