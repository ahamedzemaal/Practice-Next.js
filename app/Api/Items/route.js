export async function GET(req) {
    const type = req.nextUrl.searchParams.get('type')
    console.log('Type: ', type);
    return Response.json([
        {title: 'Nokia Mobile'},
        {title: 'Apple Mobile'},
        {title: 'Samsung Mobile'}
    ])
}

export async function POST() {
    return Response.json([
        {title: 'Redmi'},
        {title: 'Apple'},
        {title: 'Samsung'}
    ])
}