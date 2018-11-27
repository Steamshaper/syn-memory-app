export const UPLOAD_ADD = 'fm:file/ADD';
export const UPLOAD_UPDATE_PROGRESS = 'fm:file/UPDATE_PROGRESS';
export const UPLOAD_STOP = 'fm:file/STOP';
export const UPLOAD_FAILURE = 'fm:file/SHOW_ABORT_MODAL';

export const add = (slug, size, name) => ({
  type: UPLOAD_ADD,
  slug,
  size,
  name,
});

export const updateProgress = (slug, loaded) => ({
  type: UPLOAD_UPDATE_PROGRESS,
  slug,
  loaded,
});

export const stop = slug => ({
  type: UPLOAD_STOP,
  slug,
});
