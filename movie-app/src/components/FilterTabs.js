import { Tab, Tabs } from "react-bootstrap";
import Genres from './Genres';
import YearFilter from './YearFilter';
import SearchForm from './SearchForm';
import "./styles/FilterTabs.css";

function FilterTabs({setMoviesUrl, queryParams, setQueryParams}) {
    return (
        <div className="filter-tabs">
            <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="m-3 "
                justify>
                <Tab  eventKey="Search" title="Search" className="tab-pane">
                    <SearchForm setMoviesUrl={setMoviesUrl} />
                </Tab>
                <Tab eventKey="Genres" title="Genres" className="tab-pane">
                    <Genres setQueryParams={setQueryParams} />
                </Tab>
                <Tab eventKey="Year-Filter" title="Year Filter" className="tab-pane">
                    <YearFilter queryParams={queryParams} setQueryParams={setQueryParams} />
                </Tab>
            </Tabs>
        </div>
    );
}

export default FilterTabs;
