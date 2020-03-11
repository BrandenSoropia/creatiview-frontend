import Board from '../Board.svelte';
import LargeRectangularImage from '../../../public/images/large-rectangular-sample.png';
import MediumImage from '../../../public/images/medium-sample.png';
import SmallImage from '../../../public/images/small-sample.png';
export default { title: 'Board' };

export const fitsLargeRectangularImage = () => ({
  Component: Board,
  props: {
    imageSrc: LargeRectangularImage,
    alt:
      'Temperate forest pen work with boulders in foreground and a variety of trees spreading from mid to background.'
  }
});

export const fitsMediumImage = () => ({
  Component: Board,
  props: {
    imageSrc: MediumImage,
    alt:
      'Temperate forest pen work with boulders in foreground and a variety of trees spreading from mid to background.'
  }
});

export const fitsSmallImage = () => ({
  Component: Board,
  props: {
    imageSrc: SmallImage,
    alt:
      'Pencil line work of a bear sitting on its hind legs on a rocky outcrop.'
  }
});
