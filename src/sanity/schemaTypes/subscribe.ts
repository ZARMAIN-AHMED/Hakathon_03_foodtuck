export default {
    name: 'subscription',
    title: 'Subscription',
    type: 'document',
    fields: [
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; email: { (): any; new(): any; }; }; }) => Rule.required().email(),
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      },
    ],
  };
  