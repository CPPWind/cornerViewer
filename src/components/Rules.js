import React from 'react'
import Card from './Card'

const Rules = () => {

  return [
    <Card title={'Basic Terms'} key="RuleCornerTermCard"
          subtitle={'corners'}>
      <dl>
        <dt>Corners</dt>
        <dd>A list of Corners to check</dd>
        <dt>Master</dt>
        <dd>The current corner finding endpoints</dd>
        <dt>Next</dt>
        <dd>The corner immediately following the Master in order</dd>
        <dt>Candidate</dt>
        <dd>A Corner to be checked against Master for appropriateness, using the expected Axis</dd>
      </dl>
    </Card>,

    <Card title={'Basic Terms (cont)'} key="RuleOtherTermCard"
          subtitle={'other'}>
      <dl>
        <dt>Order</dt>
        <dd>Forward and Backward instead of CW, CCW</dd>
        <dt>Axis</dt>
        <dd>The Axis of the wall: NorthSouth or EastWest</dd>
        <dt>Expected Axis</dt>
        <dd>The axis of the wall from Master to Next</dd>
      </dl>
    </Card>,

    <Card title={'Oriented Pairs'} key="RuleOneCard"
          subtitle={'corners'}>
      <dl>
        <dt>NE corner walls</dt>
        <dd>End on NW, SE, or Interior</dd>
        <dt>NW corner walls</dt>
        <dd>End on NE, SW, or Interior</dd>
        <dt>SW corner walls</dt>
        <dd>End on NW, SE, or Interior</dd>
        <dt>SE corner walls</dt>
        <dd>End on SW, NE, or Interior</dd>
      </dl>
    </Card>,
    <Card title={'Expected Axis'} key="RuleTwoCard"
          subtitle={'Given Corners A,B,C,D,E,F.'}>
      <dl>
        <dt>Corner C searches forward</dt>
        <dd>The Axis of CD will be used to check E,F,A,B</dd>
        <dt>Corner B searches reverse</dt>
        <dd>The Axis of BA will be used to check F,E,D,C </dd>
      </dl>
    </Card>,
    <Card title={'Interior Corners'} key={"RuleThreeCard"}
          subtitle={'{orientation=\'\'}'}>
      <p>
      Interior corners will be checked as Candidates, but will not be Masters
      </p>
    </Card>,
    <Card title={'delta < height / 2'} key={"RuleFourCard"}
          subtitle={'Small deltas in relation to height / 2'}>
      <dl>
        <dt>EastWest Axis</dt>
        <dd>deltaY must be less than half the corner height</dd>
        <dt>NorthSourh Axis</dt>
        <dd>deltaX must be less than half the corner height</dd>
      </dl>
    </Card>,

    <Card title={'Check All Candidates'} key={"RuleFourCard"}
          subtitle={"The Last appropriate candidate is used"}>
      <ul>
        <li>Next Corner used if no other candidate found</li>
        <li>A Candidate has a correctly paired orientation</li>
        <li>Satisfies delta &lt; height / 2</li>
        <li></li>
      </ul>
    </Card>,



  ]
}

export default Rules
