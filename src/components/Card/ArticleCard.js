import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from './base';

const ArticleCard = () => (
  <Card>
    <CardHeader>
      <img src="https://i.eurosport.com/2018/10/29/2450727-50913270-2560-1440.jpg?w=200" />
    </CardHeader>
    <CardContent>
      <p>Lorem ipsum dolor sit.</p>
    </CardContent>
    <CardFooter>
      <span>more info</span>
    </CardFooter>
  </Card>
);

ArticleCard.displayName = 'ArticleCard';

export default ArticleCard;
