
const Counter = (props) => {

    const getCountString = (counts) => {
        const lastOne = counts % 10;
        const lastTwo = counts % 100;
        let str = '';
        if (lastTwo > 10 && lastTwo < 15) {
            str = ' репозиториев';
        }
        else if (lastOne == 1) {
            str = 'репозиторий';
        }
        else if (lastOne > 1 && lastOne < 5) {
            str = 'репозитория';
        }
        else {
            str = ' репозиториев';
        }
        return (counts + " " + str);
    };

    return (
        <div className="repos__count">
            {props.count ? getCountString(props.count) : '0 репозиториев'}
        </div>
    )
}
export default Counter;