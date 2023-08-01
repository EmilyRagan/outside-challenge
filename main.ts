import { elevator } from './elevator';

try
{
    const args = process.argv.slice(2, 4);

    if (args.length !== 2)
    {
        throw new Error('missing argument(s)');
    }
    const output = elevator(args);
    console.log(output);
}
catch (e)
{
    if (e instanceof Error)
    {
        console.error(e.message);
    }
}