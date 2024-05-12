import Mv from './component/Mv';
import PickUp from './component/PickUp';
import Blog from './component/Blog';
import About from './component/About';
import { getArticles } from '../libs/newt';

export default async function Top() {
  const articles = await getArticles();
  // console.log(articles)
  
  return (
    <div>
      <main className="p-top">
        <Mv />
        <PickUp obj={articles} />
        <Blog obj={articles} />
        <About />
      </main>
    </div>
  )
}
