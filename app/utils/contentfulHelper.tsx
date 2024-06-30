export const splitTitle = (title: string) => {
	return title.split('+').map((text, index) => ({
		text,
		highlighted: index % 2 === 1
	}));
};

export const extractDataFromContentfulFields = (fields: any) => {
	return Object.keys(fields).reduce((acc, key) => {
		const field = fields[key];
		const type = field?.sys?.type;
		const nodeType = field?.nodeType;

		if (type === 'Asset') {
			(acc as any)[key] = 'https:' + field.fields.file.url;
		} else if (nodeType === 'document') {
			const content = field.content as any;
			const texts = content.map((content: any) => {
				return {
					text: content.content[0].value,
					type: content.nodeType
				};
			});

			// Create an array of type DescriptionProps, which is an array of objects with a title and array of texts
			const description = texts.reduce((acc: any, text: any) => {
				if (text.type === 'heading-1') {
					acc.push({ title: text.text, texts: [] });
				} else if (acc.length > 0) {
					acc[acc.length - 1].texts.push(text.text);
				}
				return acc;
			}, []);

			(acc as any)[key] = description;
		} else if (type === 'Entry') {
			(acc as any)[key] = extractDataFromContentfulFields(field.fields);
		} else if (Array.isArray(field)) {
			(acc as any)[key] = field.map((f: any) =>
				f.fields ? extractDataFromContentfulFields(f.fields) : f
			);
		} else {
			(acc as any)[key] = field;
		}

		return acc;
	}, {});
};
