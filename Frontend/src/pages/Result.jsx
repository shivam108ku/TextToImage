import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const Result = () => {
  const [image, setImage] = useState(assets.img1); // Default placeholder image
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [size, setSize] = useState('512x512'); // Default size
  const [error, setError] = useState(null);

  const { generateImage, loadCreditsData } = useContext(AppContext);

  useEffect(() => {
    console.log('Image state:', image);
  }, [image]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await generateImage(input, size); // pass size
      console.log("Generation result:", result);

      if (result?.success) {
        const imageUrl = result.imageUrl;

        if (!imageUrl) {
          throw new Error("Received success but no image URL");
        }

        const finalUrl = `${imageUrl}?t=${Date.now()}`;
        setImage(finalUrl);
        setIsImageLoaded(true);
        loadCreditsData(); // Refresh credit balance
      } else {
        throw new Error(result?.error || "Failed to generate image");
      }
    } catch (err) {
      console.error("Generation error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
  initial={{ opacity: 0.2, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  onSubmit={onSubmitHandler}
  className="flex flex-col min-h-[90vh] justify-center items-center px-4"
>
  {/* Image Display */}
  <div className="mb-8 text-center relative z-40 w-full max-w-2xl">
    <div className="relative w-full">
      <img
        src={image}
        alt={isImageLoaded ? 'AI Generated Art' : 'Placeholder'}
        className="w-full h-auto max-h-[500px] rounded-2xl object-cover"
        key={image}
        onError={(e) => {
          console.error('Image load error:', e);
          setError('Failed to load generated image');
          setImage(assets.img1);
          setIsImageLoaded(false);
        }}
      />
      {loading && (
        <>
          <span className="absolute bottom-0 left-0 h-1 bg-red-500 w-full transition-all duration-[10s]" />
          <p className="mt-2 text-gray-500">Generating...</p>
        </>
      )}
    </div>
  </div>

  {/* Size Selector */}
  {!isImageLoaded && (
    <>
      <div className="mb-4 w-full max-w-xs text-center">
        <label className="text-white mr-2 block mb-1">Select Size:</label>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="w-full bg-neutral-700 text-white px-4 py-2 rounded-md"
          disabled={loading}
        >
          <option value="512x512">Square (512x512)</option>
          <option value="512x768">Portrait (512x768)</option>
          <option value="768x512">Landscape (768x512)</option>
        </select>
      </div>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row w-full max-w-xl bg-neutral-700 text-white text-sm p-1 mt-2 rounded-full shadow-md gap-2 sm:gap-0">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Describe your idea, and our AI will generate it!"
          className="flex-1 bg-transparent outline-none px-4 py-3 placeholder-gray-400 break-words"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className={`px-6 sm:px-8 py-3 rounded-full w-full sm:w-auto ${
            loading || !input.trim()
              ? 'bg-pink-900 cursor-not-allowed'
              : 'bg-pink-700 hover:bg-pink-600'
          }`}
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </div>
    </>
  )}
  
  {/* Buttons after generation */}
  {isImageLoaded && (
    <div className="flex flex-col sm:flex-row gap-4 mt-6 z-50 w-full justify-center px-4">
      <button
        onClick={() => {
          setIsImageLoaded(false);
          setInput('');
          setImage(assets.img1);
        }}
        className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-full font-medium transition-colors w-full sm:w-auto"
      >
        Generate Another
      </button>
      <a
        href={image}
        download="ai-generated-art.png"
        className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full font-medium transition-colors w-full sm:w-auto text-center"
      >
        Download
      </a>
    </div>
  )}

  {/* Error */}
  {error && (
    <p className="mt-4 text-red-500 text-sm text-center px-4">{error}</p>
  )}
</motion.form>

  );
};

export default Result;
