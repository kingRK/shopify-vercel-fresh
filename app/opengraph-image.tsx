import OpengraphImage from 'components/opengraph-image';

// ADD THIS LINE
export const dynamic = 'force-dynamic';

export default async function Image() {
  return await OpengraphImage();
}