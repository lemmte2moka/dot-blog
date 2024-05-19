import Mv from '../component/pages/top/Mv';
import PickUp from '../component/pages/top/PickUp';
import Blog from '../component/pages/top/Blog';
import About from '../component/pages/top/About';
import { getArticles } from '../hooks/newt';

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
