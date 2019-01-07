import React from 'react';
import moment from 'moment';
import { Card, Feed } from 'semantic-ui-react';
import * as schema from './Schema';

export interface TimelineItemProps {
  item: schema.TimelineItem;
}

const TimelineItem = (props: TimelineItemProps) => {
  const { item } = props;
  const position = item.type === 'role' ? 'left' : 'right';
  const image = item.image && require(`../images/${item.image}`);
  return (
    <>
      <div className="point"></div>
      <Card className={position}>
        <Card.Content>
          <Feed>
            <Feed.Event>
              {image && <Feed.Label>
                <img src={image} />
              </Feed.Label>}
              <Feed.Content>
                <Feed.Date>
                  {moment(item.date).format('MMM YYYY')}
                </Feed.Date>
                <Feed.Event>
                  {item.title}
                  {item.company && <span>
                    &nbsp;@ {item.company }
                  </span>}
                </Feed.Event>
                <Feed.Summary>{item.description}</Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    </>
  );
};

export default TimelineItem;
