// return list of top 10 companies
export default async (req: any, res: any) => {

  const companies = [
    { name: 'Google', description: 'Google is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search, cloud computing, software, and hardware.' },
    { name: 'Microsoft', description: 'Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington.' },
    { name: 'Amazon', description: 'Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.' },
    { name: 'Facebook', description: 'Facebook, Inc. is an American online social media and social networking service company based in Menlo Park, California.' },
    { name: 'Apple', description: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.' },
    { name: 'Alphabet', description: 'Alphabet Inc. is an American multinational conglomerate headquartered in Mountain View, California.' },
    { name: 'Alibaba', description: 'Alibaba Group Holding Limited is a Chinese multinational technology company specializing in e-commerce, retail, Internet, and technology.' },
    { name: 'Tencent', description: 'Tencent Holdings Limited is a Chinese multinational investment holding conglomerate founded in 1998 whose subsidiaries specialise in various Internet-related services and products, entertainment, artificial intelligence and technology.' },
    { name: 'Baidu', description: 'Baidu, Inc. is a Chinese multinational technology company specializing in Internet-related services and products and artificial intelligence, headquartered in Beijing.' },
    { name: 'JD.com', description: 'JD.com, Inc. is a Chinese e-commerce company headquartered in Beijing. It is one of the two largest B2C online retailers in China by transaction volume and revenue.' },
  ]
  res.status(200).json(companies);
}
