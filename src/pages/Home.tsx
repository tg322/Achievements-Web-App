import * as React from 'react';
import '../index.css';
import { useState } from 'react';

function Home(){
    const[showElement, setShowElement] = useState<string | null>('barchart');
    return(
        <div style={{display:'flex', flexDirection:'column', width:'100%', boxSizing:'border-box', padding:'30px', alignItems:'center'}}>
            <div style={{display:'flex', flexDirection:'column', width:'100%', maxWidth:'1000px', boxSizing:'border-box'}}>
                <h1>Achievements Web App Documentation</h1>
                <p>This documentation provides information on how to access and use the various charts to visualize house points data.</p>

                <div className='section_button' onClick={()=>{
                    if(showElement === 'barchart'){
                        setShowElement(null)
                    }else{
                        setShowElement('barchart');
                    }
                }}>
                    <h2>Bar Charts</h2>
                </div>

                {showElement === 'barchart' && <div style={{display:'flex', flexDirection:'column', width:'100%', padding:'10px 0px 10px 20px', boxSizing:'border-box', borderLeft:'solid 1px gray'}}>
                    <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                        <h2>Accessing Bar Charts</h2>
                        <p>The application offers different types of bar charts to display house points data. You can access these charts using specific URLs:</p>
                        <ul>
                            <li style={{margin:'5px 0px 5px 0px'}}><b>Horizontal Bar Chart:</b> <code>/horizontal/barchart</code></li>
                            <li style={{margin:'5px 0px 5px 0px'}}><b>Vertical Bar Chart:</b> <code>/vertical/barchart</code></li>
                        </ul>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                        <h2>URL Parameters</h2>
                        <p>You can customize the data displayed in the bar charts by using URL parameters. These parameters allow you to filter the data based on house initials or student year groups.</p>
                        <div style={{display:'flex', boxSizing:'border-box', padding:'15px', borderRadius:'8px', backgroundColor:'#ff000033', width:'fit-content', alignSelf:'center', margin:'20px 0px'}}>
                            <p style={{margin:'0px'}}><b>Important:</b> You cannot use both <code>house_initial</code> and <code>student_year</code> parameters simultaneously. Only one parameter should be used at a time.</p>
                        </div>
                        <table className='table_component'>
                            <caption>
                                <h3>Available URL Parameters</h3>
                            </caption>
                            <thead>
                                <tr>
                                    <th>URL Parameters</th>
                                    <th>Purpose</th>
                                    <th>Example Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>No Parameters</code></td>
                                    <td>Displays all houses and house totals for all years combined</td>
                                    <td><code>/barchart</code></td>
                                </tr>
                                <tr>
                                    <td><code>house_initial</code></td>
                                    <td>Accepts a single letter corresponding to a house. Displays house totals per year group for the specified house.</td>
                                    <td><code>/barchart?house_initial=c</code> (Displays house totals for House Corinth) </td>
                                </tr>
                                <tr>
                                    <td><code>student_year</code></td>
                                    <td>Accepts a number representing the student year group. Displays all houses with their house points for the specified year group.</td>
                                    <td><code>/barchart?student_year=7</code> (Displays data for Year 7)</td>
                                </tr>
                                <tr>
                                    <td><code>animation_timeout</code></td>
                                    <td>Accepts a number representing the time in ms the animation should wait before it starts.</td>
                                    <td><code>/barchart?animation_timeout=15000</code> (Animation waits 15 seconds before playing)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3>Usage Examples</h3>
                    <ul>
                        <li style={{margin:'5px 0px 5px 0px'}}>
                            <p><b>Filtering by House Initial</b></p>
                            <p>To view the house totals per year group for a specific house, append the house_initial parameter with the corresponding house letter to the URL: <a style={{textDecoration:'none'}} href='/horizontal/barchart?house_initial=c' target='_blank'><code>{window.location.origin}/horizontal/barchart?house_initial=c</code></a></p>
                        </li>
                        <li style={{margin:'5px 0px 5px 0px'}}>
                            <p><b>Filtering by Student Year</b></p>
                            <p>To view all houses and their house points for a specific year group, use the student_year parameter: <a style={{textDecoration:'none'}} href='/horizontal/barchart?student_year=7' target='_blank'><code>{window.location.origin}/horizontal/barchart?student_year=7</code></a></p>
                        </li>
                        <li style={{margin:'5px 0px 5px 0px'}}>
                            <p><b>Filtering with an animation delay</b></p>
                            <p style={{lineHeight:'1.5'}}>To filter with an animation timeout, use the <code>student_year</code> or <code>house_initial</code> parameter combined with <code>animation_timeout</code> like this: <a style={{textDecoration:'none'}} href='/horizontal/barchart?student_year=7&animation_timeout=15000' target='_blank'><code>{window.location.origin}/horizontal/barchart?student_year=7&animation_timeout=15000</code></a></p>
                        </li>
                    </ul>
                </div>}


                <div className='section_button' onClick={()=>{
                    if(showElement === 'leaderboard'){
                        setShowElement(null)
                    }else{
                        setShowElement('leaderboard');
                    }
                }}>
                    <h2>Leaderboard</h2>
                </div>
                {showElement === 'leaderboard' && <div style={{display:'flex', flexDirection:'column', width:'100%', padding:'10px 0px 10px 20px', boxSizing:'border-box', borderLeft:'solid 1px gray'}}>
                    <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                        <h2>Accessing Leaderboard</h2>
                        <p>You can access the Leaderboard chart using:</p>
                        <ul>
                            <li style={{margin:'5px 0px 5px 0px'}}><b>Horizontal Leaderboard:</b> <code>/horizontal/leaderboard</code></li>
                        </ul>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                        <h2>URL Parameters</h2>
                        <p>You can customize the data displayed in the leaderboard by using URL parameters. These parameters allow you to filter the data based on house initials or student year groups.</p>
                        <div style={{display:'flex', boxSizing:'border-box', padding:'15px', borderRadius:'8px', backgroundColor:'#ff000033', width:'fit-content', alignSelf:'center', margin:'20px 0px'}}>
                            <p style={{margin:'0px'}}><b>Important:</b> You cannot use both <code>house_initial</code> and <code>student_year</code> parameters simultaneously. Only one parameter should be used at a time.</p>
                        </div>
                        <table className='table_component'>
                            <caption>
                                <h3>Available URL Parameters</h3>
                            </caption>
                            <thead>
                                <tr>
                                    <th>URL Parameters</th>
                                    <th>Purpose</th>
                                    <th>Example Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>No Parameters</code></td>
                                    <td>Displays all houses and house totals for all years combined</td>
                                    <td><code>/leaderboard</code></td>
                                </tr>
                                <tr>
                                    <td><code>house_initial</code></td>
                                    <td>Accepts a single letter corresponding to a house. Displays house totals per year group for the specified house.</td>
                                    <td><code>/leaderboard?house_initial=c</code> (Displays house totals for House Corinth) </td>
                                </tr>
                                <tr>
                                    <td><code>student_year</code></td>
                                    <td>Accepts a number representing the student year group. Displays all houses with their house points for the specified year group.</td>
                                    <td><code>/leaderboard?student_year=7</code> (Displays data for Year 7)</td>
                                </tr>
                                <tr>
                                    <td><code>animation_timeout</code></td>
                                    <td>Accepts a number representing the time in ms the animation should wait before it starts.</td>
                                    <td><code>/leaderboard?animation_timeout=15000</code> (Animation waits 15 seconds before playing)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3>Usage Examples</h3>
                    <ul>
                        <li style={{margin:'5px 0px 5px 0px'}}>
                            <p><b>Filtering by House Initial</b></p>
                            <p>To view the house totals per year group for a specific house, append the house_initial parameter with the corresponding house letter to the URL: <a style={{textDecoration:'none'}} href='/horizontal/leaderboard?house_initial=c' target='blank_'><code>{window.location.origin}/horizontal/leaderboard?house_initial=c</code></a></p>
                        </li>
                        <li style={{margin:'5px 0px 5px 0px'}}>
                            <p><b>Filtering by Student Year</b></p>
                            <p>To view all houses and their house points for a specific year group, use the student_year parameter: <a style={{textDecoration:'none'}} href='/horizontal/leaderboard?student_year=7' target='blank_'><code>{window.location.origin}/horizontal/leaderboard?student_year=7</code></a></p>
                        </li>
                        <li style={{margin:'5px 0px 5px 0px'}}>
                            <p><b>Filtering with an animation delay</b></p>
                            <p style={{lineHeight:'1.5'}}>To filter with an animation timeout, use the <code>student_year</code> or <code>house_initial</code> parameter combined with <code>animation_timeout</code> like this: <a style={{textDecoration:'none'}} href='horizontal/leaderboard?student_year=7&animation_timeout=15000' target='blank_'><code>{window.location.origin}/horizontal/leaderboard?student_year=7&animation_timeout=15000</code></a></p>
                        </li>
                    </ul>
                </div>}

                <div className='section_button' onClick={()=>{
                    if(showElement === 'table'){
                        setShowElement(null)
                    }else{
                        setShowElement('table');
                    }
                }}>
                    <h2>Table</h2>
                </div>
                {showElement === 'table' && <div style={{display:'flex', flexDirection:'column', width:'100%', padding:'10px 0px 10px 20px', boxSizing:'border-box', borderLeft:'solid 1px gray'}}>
                    <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                        <h2>Accessing Table</h2>
                        <p>You can access the Table using:</p>
                        <ul>
                            <li style={{margin:'5px 0px 5px 0px'}}><b>Vertical table:</b> <code>/vertical/table</code></li>
                        </ul>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
                        <h2>URL Parameters</h2>
                        <p>You can customize the data displayed in the table by using URL parameters. These parameters allow you to filter the data based on house initials, student year groups and day range.</p>
                        {/* <div style={{display:'flex', boxSizing:'border-box', padding:'15px', borderRadius:'8px', backgroundColor:'#ff000033', width:'fit-content', alignSelf:'center', margin:'20px 0px'}}>
                            <p style={{margin:'0px'}}><b>Important:</b> You cannot use both <code>house_initial</code> and <code>student_year</code> parameters simultaneously. Only one parameter should be used at a time.</p>
                        </div> */}
                        <table className='table_component'>
                            <caption>
                                <h3>Available URL Parameters</h3>
                            </caption>
                            <thead>
                                <tr>
                                    <th>URL Parameters</th>
                                    <th>Purpose</th>
                                    <th>Example Usage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>No Parameters</code></td>
                                    <td>Displays overall top achievers this year</td>
                                    <td><code>/table</code></td>
                                </tr>
                                <tr>
                                    <td><code>house_initial</code></td>
                                    <td>Accepts a single letter corresponding to a house. Displays overall top achievers this year from a particular house.</td>
                                    <td><code>/table?house_initial=c</code> (Displays overall top achievers from Corinth) </td>
                                </tr>
                                <tr>
                                    <td><code>student_year</code></td>
                                    <td>Accepts a number representing the student year group. Displays overall top achievers from a particular year group.</td>
                                    <td><code>/table?student_year=7</code> (Displays top achievers in year 7)</td>
                                </tr>
                                <tr>
                                    <td><code>past_days</code></td>
                                    <td>Accepts a number representing the number of days, returns top achievers since the specified number of days.</td>
                                    <td><code>/table?past_days=7</code> (Displays top achievers within the past 7 days)</td>
                                </tr>
                                <tr>
                                    <td><code>above_points & below_points</code></td>
                                    <td>Accepts a number representing the number of points the students should be under, returns top achievers with points under the specified amount.</td>
                                    <td><code>/table?below_points=25</code> (Displays top achievers with points below 25)</td>
                                </tr>
                                <tr>
                                    <td><code>animation_timeout</code></td>
                                    <td>Accepts a number representing the time in ms the animation should wait before it starts.</td>
                                    <td><code>/table?animation_timeout=15000</code> (Animation waits 15 seconds before playing)</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    <h3>Usage Examples</h3>
                    <ul>
                        <li style={{margin:'5px 0px 5px 0px'}}>
                            <p><b>Filtering by House Initial</b></p>
                            <p>To view the overall top achievers from a specific house, use the house_initial parameter: <a style={{textDecoration:'none'}} href='/vertical/table?house_initial=c' target='blank_'><code>{window.location.origin}/vertical/table?house_initial=c</code></a></p>
                        </li>
                        <li style={{margin:'5px 0px 5px 0px'}}>
                            <p><b>Filtering by Student Year</b></p>
                            <p>To view the top achievers from a specific year group, use the student_year parameter: <a style={{textDecoration:'none'}} href='/vertical/table?student_year=7' target='blank_'><code>{window.location.origin}/vertical/table?student_year=7</code></a></p>
                        </li>
                        <li style={{margin:'5px 0px 5px 0px'}}>
                            <p><b>Filtering by day range</b></p>
                            <p>To view the top achievers from a day range, use the past_days parameter: <a style={{textDecoration:'none'}} href='/vertical/table?past_days=7' target='blank_'><code>{window.location.origin}/vertical/table?past_days=7</code></a></p>
                        </li>
                        <li style={{margin:'5px 0px 5px 0px'}}>
                            <p><b>Filtering within a points range</b></p>
                            <p>To view the top achievers within a specified points range, use the above_points combined with the below_points parameter: <a style={{textDecoration:'none'}} href='/vertical/table?above_points=12&below_points=25' target='blank_'><code>{window.location.origin}/vertical/table?above_points=12&below_points=25</code></a></p>
                        </li>
                        <li style={{margin:'5px 0px 5px 0px'}}>
                            <p><b>Filtering with an animation delay</b></p>
                            <p style={{lineHeight:'1.5'}}>To filter with an animation timeout, use any combination of <code>student_year</code>, <code>house_initial</code>, <code>above_points</code>, <code>below_points</code> or <code>past_days</code> parameters combined with <code>animation_timeout</code> like this: <a style={{textDecoration:'none'}} href='vertical/table?student_year=7&house_initial=c&animation_timeout=15000' target='blank_'><code>{window.location.origin}vertical/table?student_year=7&house_initial=c&animation_timeout=15000</code></a></p>
                        </li>
                    </ul>
                </div>}


            </div>
        </div>
    );
}
export default Home