import React from 'react';

// Article型の定義
interface Article {
  _id: string;
  pickup: boolean;
  title: string;
  date: string;
  category: string;
  body: string;
  thumb: {
    _id: string;
    altText: string;
    description: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    height: number;
    metadata: object; // 必要に応じて修正
    src: string;
    title: string;
    width: number;
  };
  sns: object[]; // 必要に応じて修正
}

interface Props {
  obj: Article[];
}

const PickUp: React.FC<Props> = ({ obj }) => {
  const pickUpItems = obj.filter(item => item.pickup);
  console.log(pickUpItems);
  return (
    <section className='p-top-pickup'>
      <div className='l-container'>
        <ul>
          {pickUpItems.map(items => (
            <li key={items._id}>
              <p>{items.title}</p>
            </li>
          ))

          }
        </ul>
      </div>
    </section>
  )
};

export default PickUp;