import css from './LoadMoreBtn.module.css'
import { LoadMoreBtnProps } from './LoadMoreBtn.types';




const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onAddPage }) => {
  
  const handleClick = (): void => {
    onAddPage();
  };

  return <button onClick={handleClick} className={css.loadBtn}>Load More</button>;
};

export default LoadMoreBtn;
