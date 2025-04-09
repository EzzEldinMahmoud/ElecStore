import { useRouter } from 'vue-router'

export default function routerRedirect(router:any , url: string) {
    
    return router.push(url);
}