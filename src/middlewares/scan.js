import { createToast } from 'mosha-vue-toastify';

export default async ({ store, to, next }) => {
    let selectedFile = await store.getters['scan/getFileSummary'];
    if (!selectedFile) {
        selectedFile = store.dispatch('scan/fetchFileSummary', to.params.id);


        selectedFile.catch(err => {
            if (err) {
                createToast(err.response.status == 404 && 'File not found' || err.message, { type: 'danger', position: 'bottom-right' });

                return next({ path: '/' })
            }
            return next();
        });

        return next();
    }

    return next();
}