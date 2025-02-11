import React, { useState, useEffect, useRef } from 'react';

// Simple placeholder SVG as a data URL - making it responsive
const placeHolderImage = `data:image/svg+xml;base64,${btoa('<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f0f0f0"/><text x="50%" y="50%" font-family="Arial" font-size="10" fill="#666" text-anchor="middle" dy=".3em">Issue With Image</text></svg>')}`;

interface RobustImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  fallbackSrc?: string;
  lazy?: boolean;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: React.ReactNode;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
}

const RobustImage: React.FC<RobustImageProps> = ({
  src,
  alt = 'Image',
  fallbackSrc,
  lazy = true,
  className = '',
  style = {},
  placeholder,
  containerClassName = '',
  containerStyle = {},
  ...props
}) => {
  const [source, setSource] = useState<string | null>(src);
  const [loading, setLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleError = () => {
    if (fallbackSrc) {
      setSource(fallbackSrc);
    } else {
      setSource(placeHolderImage);
    }
  };

  const handleLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (!lazy) {
      setLoading(false);
      return;
    }

    const currentImgRef = imgRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoading(false);
            observer.unobserve(currentImgRef!);
          }
        });
      },
      {
        rootMargin: '200px',
        threshold: 0.1,
      }
    );

    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, [lazy]);

  // Default styles for responsive behavior
  const defaultContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  const defaultImageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.3s ease',
  };

  return (
    <div
      className={containerClassName}
      style={{ ...defaultContainerStyle, ...containerStyle }}
    >
      {loading && placeholder ? (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          {placeholder}
        </div>
      ) : null}

      <img
        ref={imgRef}
        src={source || ''}
        alt={alt}
        className={className}
        style={{
          ...defaultImageStyle,
          ...style,
          ...(loading ? { opacity: 0 } : { opacity: 1 }),
        }}
        onError={handleError}
        onLoad={handleLoad}
        loading={lazy ? 'lazy' : 'eager'}
        {...props}
      />
    </div>
  );
};

export default RobustImage;