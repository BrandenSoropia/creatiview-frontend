import Board from '../Board.svelte';
import LargeRectangularImage from '../../../public/images/large-rectangular-sample.png';
import LargeSquareImage from '../../../public/images/large-square-sample.png';
import SmallImage from '../../../public/images/small-sample.png';
export default { title: 'Board' };

const mockOnThreadMarkerClick = () => {
  alert('### thread marker clicked!');
};

export const fitsLargeRectangularImageWithComments = () => ({
  Component: Board,
  props: {
    imageSrc: LargeRectangularImage,
    alt:
      'Temperate forest pen work with boulders in foreground and a variety of trees spreading from mid to background.',
    onThreadMarkerClick: mockOnThreadMarkerClick,
    threads: [
      { tempId: 1, posX: 200, posY: 300 },
      { tempId: 2, posX: 450, posY: 450 }
    ]
  }
});

export const fitsLargeSquareImageWithoutComments = () => ({
  Component: Board,
  props: {
    imageSrc: LargeSquareImage,
    alt:
      'Pencil line work of a bear sitting on its hind legs on a rocky outcrop.',
    onThreadMarkerClick: mockOnThreadMarkerClick
  }
});

export const fitsSmallImage = () => ({
  Component: Board,
  props: {
    imageSrc: SmallImage,
    alt:
      'Pencil line work of a bear sitting on its hind legs on a rocky outcrop.',
    onThreadMarkerClick: mockOnThreadMarkerClick
  }
});
