/** Wersy w hero (nad tytułem). */
export const PROTEST_VERSE_LINES = [
  "Zostawcie Botanika!",
  "Nie róbcie z niego show!",
  "Tu Dżungli nie chcą ludzie,",
  "Tu zieleń ma swój dom!",
] as const;

const PROTEST_SONG_YOUTUBE_VIDEO_ID_INLINE = "yDhe1qR8WFw";

export const PROTEST_SONG_YOUTUBE_VIDEO_ID =
  PROTEST_SONG_YOUTUBE_VIDEO_ID_INLINE.trim() ||
  process.env.NEXT_PUBLIC_PROTEST_SONG_YOUTUBE_ID?.trim() ||
  "";
