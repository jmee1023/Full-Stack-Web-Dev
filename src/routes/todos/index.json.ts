import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = () => {
    return {
        status: 200,
        body: "Hello from the API."
    }
}

export const post: RequestHandler = (request) => {
    console.log(request.body)

}