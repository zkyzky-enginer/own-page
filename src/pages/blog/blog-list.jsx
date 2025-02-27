import React from 'react';
import { Card, Flex } from 'antd';

// export function BlogCard() {
// 	return <></>;
// }

export default function BlogList() {
	return (
		<>
			<Flex wrap gap="large">
				{Array.from({ length: 10 }).map((_, index) => (
					<Card className="inline-block" key={index} title={`Card title ${index + 1}`} variant="borderless" style={{ width: 300 }}>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</Card>
				))}
			</Flex>
		</>
	);
}
