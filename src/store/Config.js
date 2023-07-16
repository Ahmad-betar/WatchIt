export const Config = {

    baseUrl: 'https://api.themoviedb.org/3/',
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzhjYzk0OTQyNjAzOGQ0ZDMxNjM4NzRhNDUzYjZmNyIsInN1YiI6IjY0N2NiMzNiMjYzNDYyMDBkYzQyOTA4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aPpohnre8sQZWIRRfZCAAynIfm4g5q_jLBewR9dXlcA',
    },

}


export const MovieType = {
    topRated : 'top_rated',
    popular : 'popular',
    now_playing : 'now_playing',
    upcoming : 'upcoming',
    trending : 'trending',
}


export const TvType = {
    topRated : 'top_rated',
    popular : 'popular',
    airingTody : 'airing_today',
    onTheAir : 'on_the_air',
    trending : 'trending',
}
export const peopleType = {
    popular : 'popular',
}

export const Type = {
    all : 'all',
    movie : 'movie',
    tv : 'tv',
    person : 'person'
}