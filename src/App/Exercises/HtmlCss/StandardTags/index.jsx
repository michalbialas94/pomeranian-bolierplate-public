import './styles.css';

export function StandardTags() {
  return (
    <div className="standard-tags">
      {' '}
      <div class="original-tags">
        <h1>Tytuł</h1>
        <small>05.2023</small>{' '}
        <h3>
          H<sub>2</sub>O is good for you{' '}
        </h3>{' '}
        <p>
          Staying <b>hydrated</b> is one of the best things you can do for your
          overall health. Staying <b>hydrated</b> can help support physical
          performance, prevent headaches and constipation, and more.{' '}
        </p>{' '}
        <h3>
          25<sup>th</sup> birthday{' '}
        </h3>{' '}
        <p>
          Make the next birthday you celebrate a special one with a hand-picked
          happy birthday <q>quote</q> or wish that will surely make that special
          someone's day a great day. Whether you're celebrating your birthday or
          someone else's, you can rely on our list of <i>happy birthday</i>
          <q>quotes</q> to help put a smile on someone's face. From
          inspirational to funny to cute sayings, browse our list of
          <q>quotes</q> to find one that resonates with you. <del>Nothing</del>
          can stop you!{' '}
        </p>{' '}
        <h3>
          Why not to use <ins>lists</ins> ?{' '}
        </h3>{' '}
        <p>
          {' '}
          <h5>
            A lot of things to do <i>#todo</i>{' '}
          </h5>{' '}
          <ul>
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>{' '}
          </ul>{' '}
        </p>{' '}
      </div>
      ========={' '}
      <div class="faked-tags">
        <div1>Tytuł</div1> <span>05.2023</span>
        <div2>
          H<span1>2</span1>O is good for you
        </div2>
        <p>
          Staying <span>hydrated</span> is one of the best things you can do for
          your overall health. Staying <span>hydrated</span> can help support
          physical performance, prevent headaches and constipation, and more.
        </p>
        <div2>
          25<span>th</span> birthday
        </div2>
        <p>
          Make the next birthday you celebrate a special one with a hand-picked
          happy birthday <q>quote</q> or wish that will surely make that special
          someone's day a great day. Whether you're celebrating your birthday or
          someone else's, you can rely on our list of
          <span>happy birthday</span>
          <span>quotes</span> to help put a smile on someone's face. From
          inspirational to funny to cute sayings, browse our list of
          <span>quotes</span> to find one that resonates with you.
          <span>Nothing</span>
          can stop you!
        </p>
        <div2>
          Why not to use <span>lists</span> ?
        </div2>
        <p>
          <div>
            A lot of things to do <span>#todo</span>
          </div>
          <div>
            <div>Todo 1</div>
            <div>Todo 2</div>
            <div>Todo 3</div>
          </div>
        </p>
      </div>
    </div>
  );
}